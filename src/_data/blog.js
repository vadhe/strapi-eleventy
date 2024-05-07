module.exports = async () => {
    try {
        const response = await fetch('https://authentic-attraction-395c8e1af9.strapiapp.com/api/blogs');
        const data = await response.json();
        console.log(data.data[2]);
        return data.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return null;
    }
}
