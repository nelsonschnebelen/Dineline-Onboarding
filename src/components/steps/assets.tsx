"use client";

import { FileUpload } from "@/components/ui/file-upload";

export function AssetsStep() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-1">
                <h3 className="text-lg font-medium text-white">Brand Assets</h3>
                <p className="text-sm text-gray-400">Upload your logo, menus, and food photos.</p>
            </div>

            <div className="space-y-8">
                <FileUpload label="Restaurant Logo (Transparent PNG preferred)" accept="image/*" />
                <FileUpload label="Menu Files (PDF or High Res Image)" accept=".pdf,image/*" multiple />
                <FileUpload label="Food Photos & Videos (Optional)" accept="image/*,video/*" multiple />
            </div>
        </div>
    );
}
