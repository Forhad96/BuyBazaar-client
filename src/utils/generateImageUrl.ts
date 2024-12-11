export default function generateImageUrl(): string {
    const baseUrl = "https://images.pexels.com/photos/";
    const photoId = Math.floor(Math.random() * 1000000).toString(); // generate a random ID
    return `${baseUrl}${photoId}/pexels-photo-${photoId}.jpeg/?auto=compress&cs=tinysrgb&w=360&h=250&dpr=1`;
  }