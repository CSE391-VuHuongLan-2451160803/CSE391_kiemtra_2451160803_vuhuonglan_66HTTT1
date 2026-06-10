const form = document.getElementById("profileForm");

const schoolName = document.getElementById("schoolName");
const department = document.getElementById("department");
const status = document.getElementById("status");
const description = document.getElementById("description");

const error = document.getElementById("error");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const school = schoolName.value.trim();
    const dept = department.value;
    const stt = status.value;
    const desc = description.value.trim();

    if (school === "") {
        error.textContent =
            "Tên trường không được để trống";
        return;
    }

    if (school.length > 100) {
        error.textContent =
            "Tên trường không được vượt quá 100 ký tự";
        return;
    }

    if (dept === "") {
        error.textContent =
            "Vui lòng chọn đơn vị quản lý";
        return;
    }

    if (stt === "") {
        error.textContent =
            "Vui lòng chọn trạng thái chuyển đổi";
        return;
    }

    if (desc === "") {
        error.textContent =
            "Mô tả tiến độ không được để trống";
        return;
    }

    error.textContent = "";

    alert("Thêm hồ sơ thành công!");

    form.reset();
});