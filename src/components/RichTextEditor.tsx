'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className="border border-gray-300 rounded-md">
      <div className="border-b border-gray-300 p-2 flex flex-wrap gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('bold') ? 'bg-[#818CF8] text-white' : 'bg-gray-200'
          }`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('italic') ? 'bg-[#818CF8] text-white' : 'bg-gray-200'
          }`}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('heading', { level: 2 }) ? 'bg-[#818CF8] text-white' : 'bg-gray-200'
          }`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('heading', { level: 3 }) ? 'bg-[#818CF8] text-white' : 'bg-gray-200'
          }`}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('bulletList') ? 'bg-[#818CF8] text-white' : 'bg-gray-200'
          }`}
        >
          List
        </button>
        <button
          onClick={() => {
            const url = window.prompt('URL')
            if (url) {
              editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
            }
          }}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('link') ? 'bg-[#818CF8] text-white' : 'bg-gray-200'
          }`}
        >
          Link
        </button>
      </div>
      <EditorContent 
        editor={editor} 
        className="prose max-w-none p-4 min-h-[300px] focus:outline-none"
      />
    </div>
  )
}