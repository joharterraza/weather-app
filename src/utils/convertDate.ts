export function convertToDate(time: number): string | null {
    let formattedDate = null;
    try {
        const date = new Date(time * 1000); // Convert seconds to milliseconds
        formattedDate = date.toLocaleString(); // Convert to a human-readable string
    } catch (error) {
        console.log(error)
    }
    
    return formattedDate;
}