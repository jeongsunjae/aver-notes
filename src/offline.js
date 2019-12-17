import { GET_NOTES } from "./queries";

export const saveNotes = (cache) => {
    const { notes } = cache.readQuery({ query: GET_NOTES });
    const jsonNotes = JSON.stringify(notes);

    try{
        localStorage.setItem("notes",jsonNotes);
    }
    catch(e)
    {
        console.log(e);
    }
}

export const resotreNotes = ()=>{
    const notes = localStorage.getItem("notes");

    if(notes){
        try{
            const parsedNotes = JSON.parse(notes);
            return parsedNotes;
        }catch(e){
            console.log(e);
            return [];
        }
    }
    return [];
}