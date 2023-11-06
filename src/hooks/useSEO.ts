import { useEffect } from "react";

export function useSEO ( 
    { title, description } :
    { title: string, description: string }
) {
   
    useEffect(() => {
        document.title = title;
        document
            .querySelector('meta[meta="description"]')
            ?.setAttribute("content", description)
    }, [title, description])
    
}