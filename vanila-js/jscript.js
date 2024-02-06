let cnt = 1;

//등록하는 function
function a() {
    let writer = f.writer.value;
    let pwd = f.pwd.value;
    let content = f.content.value;

    let el = mkDiv(writer, pwd, content);
    let list = document.getElementById("list");
    list.appendChild(el);

    f.writer.value = "";
    f.pwd.value = "";
    f.content.value = "";
}

function mkDiv(writer, pwd, content) {
    let newDiv = document.createElement("div");//새 div태그 생성  <div id="d_1" pwd='111'>
    newDiv.id = "d_" + cnt;//생성한 div에 id 지정. d_cnt
    newDiv.pwd = pwd; //

    let html = ""; //생성된 div에 출력될 내용
    html += "writer:<span id='w_"+cnt+"'>" + writer + "</span><br/>";
    html += "content:<span id='c_"+cnt+"'>" + content + "</span><br/>";
    html += "<input type='button' value='수정' onclick=editForm(" + cnt
            + ")>"; //editForm(2)
    html += "<input type='button' value='삭제' onclick=del(" + cnt + ")>";
    newDiv.innerHTML = html;
    cnt++;
    return newDiv;
}


//수정하는 function
function editForm(cnt) {
    let editDiv = document.getElementById("d_" + cnt); //수정할 글의 div
    let editForm = document.getElementById("editf");
    editDiv.appendChild(editForm);

    let writer = document.getElementById("w_" + cnt).innerHTML;
    let content = document.getElementById("c_" + cnt).innerHTML;
    document.getElementById("editwriter").value = writer;
    document.getElementById("editcontent").value = content;
    document.getElementById("editbtn").cnt = cnt;//버튼에 cnt속성을 추가해서, 수정 글번호를 저장
    editForm.style.display = '';
}

function cancel() {
    let editForm = document.getElementById("editf");
    editForm.style.display = 'none';
    document.getElementsByTagName("body")[0].appendChild(editForm);

}

function edit() {
    let cnt = document.getElementById("editbtn").cnt;
    let editDiv = document.getElementById("d_" + cnt); //여기서 해당 div정보를 가져옴 - cnt로 분기쳐놨네
    let pwd2 = document.getElementById("editpwd").value;//수정폼에 입력한 글 비밀번호
    if (editDiv.pwd != pwd2) {
        alert("글 비밀번호 불일치. 수정불가");
    } else {
        let newWriter = document.getElementById("editwriter").value;
        let newContent = document.getElementById("editcontent").value;
        document.getElementById("w_" + cnt).innerHTML = newWriter;
        document.getElementById("c_" + cnt).innerHTML = newContent;
    }
    document.getElementById("editwriter").value = "";
    document.getElementById("editcontent").value = "";
    document.getElementById("editpwd").value = "";
    cancel();
}

function del(cnt) {
    let pwd = prompt("글 비밀번호");
    let delDiv = document.getElementById("d_" + cnt);
    if (pwd == delDiv.pwd) {
        document.getElementById("list").removeChild(delDiv);
    }else{
        alert("글 비밀번호 불일치. 삭제취소");
    }
}
