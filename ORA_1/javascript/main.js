function loadContent(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); 
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Có lỗi xảy ra:', error);
        });
}

function loadSibar(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); 
        })
        .then(data => {
            document.getElementById('mySidebar').innerHTML = data;
        })
        .catch(error => {
            console.error('Có lỗi xảy ra:', error);
        });
}