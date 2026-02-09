async function handleRegister() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const grade = document.getElementById('grade').value;

    const { data, error } = await _supabase.auth.signUp({
        email, password,
        options: { data: { display_name: username, grade: grade } }
    });

    if (error) alert(error.message);
    else alert("Đăng ký xong! Kiểm tra email nhé.");
}
