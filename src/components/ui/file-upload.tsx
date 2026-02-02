"use client";

import { useState, useRef } from "react";
import { Upload, File, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
    label: string;
    accept?: string;
    multiple?: boolean;
}

export function FileUpload({ label, accept, multiple }: FileUploadProps) {
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => setIsDragging(false);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files?.length) {
            const newFiles = Array.from(e.dataTransfer.files);
            setFiles(prev => multiple ? [...prev, ...newFiles] : newFiles);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            const newFiles = Array.from(e.target.files);
            setFiles(prev => multiple ? [...prev, ...newFiles] : newFiles);
        }
    };

    const removeFile = (index: number) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    // Trigger input click
    const handleClick = () => inputRef.current?.click();

    return (
        <div className="space-y-3">
            <label className="text-sm font-medium text-gray-200">{label}</label>

            <div
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragging ? "border-primary bg-primary/10" : "border-gray-700 hover:border-gray-500 bg-surface"}
        `}
            >
                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    accept={accept}
                    multiple={multiple}
                    onChange={handleFileSelect}
                />

                <div className="flex flex-col items-center gap-2">
                    <div className="p-3 bg-background rounded-full">
                        <Upload className="w-5 h-5 text-text-secondary" />
                    </div>
                    <p className="text-sm text-text-primary">
                        <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-text-secondary">
                        SVG, PNG, JPG or PDF (max. 10MB)
                    </p>
                </div>
            </div>

            {/* File List */}
            {files.length > 0 && (
                <div className="space-y-2 mt-4">
                    {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-background rounded border border-gray-800">
                            <div className="flex items-center gap-3">
                                <File className="w-4 h-4 text-primary" />
                                <div className="text-sm">
                                    <p className="text-white font-medium truncate max-w-[200px]">{file.name}</p>
                                    <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-500 text-xs flex items-center"><Check className="w-3 h-3 mr-1" /> Uploaded</span>
                                <button onClick={(e) => { e.stopPropagation(); removeFile(index); }} className="text-gray-500 hover:text-white">
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
