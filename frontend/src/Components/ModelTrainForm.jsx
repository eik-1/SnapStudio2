import React, { useState, useRef } from "react"
import JSZip from "jszip"
import axios from "axios"

import { Button } from "./UI/Button"

function ModelTrainForm() {
    const [modelName, setModelName] = useState("")
    const [triggerWord, setTriggerWord] = useState("MOD")
    const [selectedFiles, setSelectedFiles] = useState([])

    const fileInputRef = useRef(null)

    function handleFileChange(e) {
        const files = Array.from(e.target.files)
        setSelectedFiles((prevFiles) => [...prevFiles, ...files])
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (selectedFiles.length === 0) return

        const zip = new JSZip()
        selectedFiles.forEach((file) => {
            zip.file(file.name, file)
        })

        const zipBlob = await zip.generateAsync({ type: "blob" })

        const formData = new FormData()
        formData.append("file", zipBlob, "images.zip")
        formData.append("modelName", modelName)
        formData.append("triggerWord", triggerWord)

        try {
            const response = await axios.post(
                "http://localhost:3000/models/train",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            )
            console.log("Training started: ", response.data)
        } catch (err) {
            console.error("Error starting training: ", err)
        }
        setSelectedFiles([])
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    const removeFile = (index) => {
        setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
    }

    return (
        <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Model Name
                    </label>
                    <input
                        type="text"
                        value={modelName}
                        onChange={(e) => setModelName(e.target.value)}
                        required
                        className="px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label
                        htmlFor="images"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Select Images
                    </label>
                    <input
                        type="file"
                        id="images"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        multiple
                        accept="image/*"
                        className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-slate-50 file:text-slate-700
              hover:file:bg-slate-100"
                    />
                </div>
                <div>
                    <p className="text-sm text-gray-600 mb-2">
                        Selected images: {selectedFiles.length}
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                        {selectedFiles.slice(0, 3).map((file, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={`Preview ${index + 1}`}
                                    className="w-full h-24 object-cover rounded"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeFile(index)}
                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Trigger Word
                    </label>
                    <input
                        type="text"
                        value={triggerWord}
                        onChange={(e) => setTriggerWord(e.target.value)}
                        className="px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                    />
                </div>
                <Button
                    type="button"
                    onClick={handleSubmit}
                    disabled={selectedFiles.length === 0 && modelName === ""}
                    className="w-full"
                >
                    Train Model
                </Button>
            </form>
        </div>
    )
}

export default ModelTrainForm
