import { supabase } from "./supabaseConfig";

type NoteProps = {
    id: string,
    categoryId: string,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date
}

type NoteResponseModel = {
    data: NoteProps[],
    status: number,
    statusText: string
}

export function getNoteById(id: string) {
    const { data, error } = supabase.from("Tbl_Note").select().eq("id", id).limit(1).single()

    const { data } = data as NoteResponseModel
    return {}
}