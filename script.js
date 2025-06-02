document.addEventListener('DOMContentLoaded', () => {
    // Clock in header
    function updateClock() {
        document.getElementById('clock').textContent = new Date().toLocaleTimeString('fa-IR');
    }
    updateClock();
    setInterval(updateClock, 1000);

    // Add to cart notification
    document.querySelectorAll('.product button').forEach(button => {
        const demo = button.nextElementSibling; 
        button.addEventListener('click', () => {
            alert('به سبد افزوده شد');
            demo.textContent = "اضافه شده"; 
            demo.style.color = "red"; 
        });
    });        

    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault()//;میاد جلو ارسال و رفرش الکی رو میگیره
        const username = document.getElementById('username').value;
        if (username.trim() === "") {
            alert("نام کاربری را وارد کنید!");
        } else {
            alert("فرم با موفقیت ارسال شد: " + username);
        }
    });

    // Filter products
    document.getElementById('searchbox').addEventListener('input', function() {
        let filter = this.value.toLowerCase();
        document.querySelectorAll('.product').forEach(product => {
            let text = product.textContent.toLowerCase();
            if (text.includes(filter)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
 

});