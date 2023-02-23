export const getURL = ():string => {
    return process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
}