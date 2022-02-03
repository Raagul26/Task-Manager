data = "";
function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById("backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById("backdrop").classList.toggle("flex");
    document.getElementById('task-name')["value"] = "";
    document.getElementById('assigned')["value"] = "";
    document.getElementById('assigned-to')["value"] = "";
    document.getElementById('status')["value"] = "";
}
function addTask() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var taskName = document.getElementById('task-name')["value"];
    var assigned = document.getElementById('assigned')["value"];
    var assignedTo = document.getElementById('assigned-to')["value"];
    var status = document.getElementById('status')["value"];
    if (taskName !== "" && assigned !== "" && assignedTo !== "" && status !== "") {
        var rowData = {
            task: taskName,
            assigned: assigned,
            assignedTo: assignedTo,
            status: status
        };
        var tableBody = document.getElementById("table-body");
        var tableRow = document.createElement('tr');
        var rowClasses = ['border-b', 'border-gray-200', 'hover:bg-gray-100'];
        (_a = tableRow.classList).add.apply(_a, rowClasses);
        tableRow.setAttribute("id", rowData.task + rowData.assigned + rowData.assignedTo);
        var tableCol1 = document.createElement('td');
        var col1Classes = ['py-3', 'px-6', 'text-left', 'whitespace-nowrap', 'font-normal'];
        (_b = tableCol1.classList).add.apply(_b, col1Classes);
        tableCol1.innerText = rowData.task;
        var tableCol2 = document.createElement('td');
        var col2Classes = ['py-3', 'px-6', 'text-left', 'font-normal'];
        (_c = tableCol2.classList).add.apply(_c, col2Classes);
        tableCol2.innerText = rowData.assigned;
        var tableCol3 = document.createElement('td');
        var col3Classes = ['py-3', 'px-6', 'text-center', 'font-normal'];
        (_d = tableCol3.classList).add.apply(_d, col3Classes);
        tableCol3.innerText = rowData.assignedTo;
        var tableCol4 = document.createElement('td');
        var col4Classes = ['py-3', 'px-6', 'text-center', 'font-normal'];
        (_e = tableCol4.classList).add.apply(_e, col4Classes);
        if (status == 'completed') {
            tableCol4.innerHTML = "<span class=\"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs\">Completed</span>";
        }
        else if (status == 'scheduled') {
            tableCol4.innerHTML = "<span class=\"bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs\">Scheduled</span>";
        }
        else {
            tableCol4.innerHTML = "<span class=\"bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs\">Pending</span>";
        }
        var tableCol5 = document.createElement('td');
        var col5Classes = ['py-3', 'px-6', 'text-center'];
        (_f = tableCol5.classList).add.apply(_f, col5Classes);
        var mainDiv = document.createElement('div');
        var mainDivClasses = ['flex', 'item-center', 'justify-center'];
        (_g = mainDiv.classList).add.apply(_g, mainDivClasses);
        var editDiv = document.createElement('div');
        var editDivClasses = ['w-4', 'mr-2', 'transform', 'hover:text-purple-500', 'hover:scale-110'];
        (_h = editDiv.classList).add.apply(_h, editDivClasses);
        editDiv.innerHTML = "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z\" />\n        </svg>";
        editDiv.addEventListener('click', function (e) {
            toggleModal("edit-modal");
            data = e.target['parentElement']['parentElement']['parentElement']['parentElement'].childNodes;
        });
        var deleteDiv = document.createElement('div');
        var deleteDivClasses = ['w-4', 'mr-2', 'transform', 'hover:text-purple-500', 'hover:scale-110'];
        (_j = deleteDiv.classList).add.apply(_j, deleteDivClasses);
        deleteDiv.innerHTML = "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\" />\n        </svg>";
        deleteDiv.addEventListener('click', function (e) {
            document.getElementById(rowData.task + rowData.assigned + rowData.assignedTo).remove();
        });
        mainDiv.appendChild(editDiv);
        mainDiv.appendChild(deleteDiv);
        tableCol5.appendChild(mainDiv);
        tableRow.appendChild(tableCol1);
        tableRow.appendChild(tableCol2);
        tableRow.appendChild(tableCol3);
        tableRow.appendChild(tableCol4);
        tableRow.appendChild(tableCol5);
        tableBody.appendChild(tableRow);
        toggleModal('add-modal');
    }
}
function editTask() {
    var taskName = document.getElementById('edit-task-name')["value"];
    var assigned = document.getElementById('edit-assigned')["value"];
    var assignedTo = document.getElementById('edit-assigned-to')["value"];
    var status = document.getElementById('edit-status')["value"];
    console.log(taskName, assigned, assignedTo, status);
    console.log(data);
    data[0].innerText = taskName;
    data[1].innerText = assigned;
    data[2].innerText = assignedTo;
    data[3].innerText = status;
    toggleModal('edit-modal');
}
