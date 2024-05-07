module.exports = async () => {
    try {
        const response = await fetch('http://localhost:1337/api/blogs');
        const data = await response.json();
        console.log(data.data[2]);
        return data.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return null;
    }
}