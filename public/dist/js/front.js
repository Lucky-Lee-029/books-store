$(document).ready(function () {

    'use strict';

    
    // ------------------------------------------------------- //
    // Adding fade effect to dropdowns
    // ------------------------------------------------------ //
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
    });
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
    });



    //Edit table
    function TableEdit() {

        if(localStorage.getItem('editable') == 'off')
        {
            $('td:not(.not-edit)').unbind('click');
        }
        else {
        $('td:not(.not-edit)').click(function() {       
                console.log("hello");
                const old_text = $(this).html();
                const tr = $(this).parents('tr').first();
                const child = tr.children();
                const id = parseInt(child[0].innerHTML);
                let th = $("table thead tr th").eq($(this).index()).html().toUpperCase();
                if(th == 'TÊN DANH MỤC') th = 'NAME';
                const path = window.location.pathname;
                console.log(path);
                var input_field = '<input type="text" id="edit" value="' + old_text + '" />'
                $(this).empty().append(input_field);
                $('input').focus();
                var i = 0;
                $('td').off('click');
                $(this).find('input').blur(function(){
                    var new_text = $(this).val();
                    $(this).parent().html(new_text);
                    if (old_text != new_text)
                    {   
                        switch(th) {
                            case 'TÊN SÁCH': 
                                th = "name";
                                break;
                            case 'TÁC GIẢ':
                                th = "author";
                                break;
                            case 'GIÁ':
                                th = "price";
                                break;
                        }
                        $.post(path+'/edit', { id: id, column:th, info: new_text });

                    }
                    TableEdit();
                });
        })
        }
    }
    //Accept edit table btn
    localStorage.setItem('editable', 'off');
    $('#edit-table').on('click', function () { 
        switch(localStorage.getItem('editable')) {
            case 'on':
                localStorage.setItem('editable', 'off');
                $(this).html('<i class="fas fa-edit"></i>Bật sửa trực tiếp');
                break;
            case 'off':
                localStorage.setItem('editable', 'on');
                $(this).html('<i class="fas fa-edit"></i>Tắt sửa trực tiếp');
                break;  
          }
        TableEdit(); 
    });
    //Confirm form
    var confirmForm = function(callback) {

        $("#modal-btn-yes").on("click", function() {
        $("#confirm-modal").modal('hide')
        return callback(true);
        });
  
        $("#modal-btn-no").on("click", function() {
        $("#confirm-modal").modal('hide');
        return callback(false);
        });
    }
    $(".delete").on("click", function() {
        const tr = $(this).parents('tr').first();
        const child = tr.children();
        const id = parseInt(child[0].innerHTML);
        const path = window.location.pathname;
        confirmForm(function(confirm) {
            if(confirm)
            {
                if(path.includes('category')) {
                    const number = parseInt(child[2].innerHTML);
                    if(number == 0 ) {
                        tr.remove();
                        $.post(path + '/delete', { id: id }, function(res) {
                                console.log(res);// success callback
                                alert("Xoá danh mục thành công");
                        });
                    }
                    else {
                        alert("Danh mục này vẫn còn sách");
                    }
                }
                if(path.includes('book')) {
                    tr.remove();
                    $.post(path + '/delete', { id: id }, function(res) {
                            console.log(res);// success callback
                            alert("Xoá sách thành công");
                    });
                }
            }
            });             
    });
    $(".accept").on("click", function() {
        const tr = $(this).parents('tr').first();
        const child = tr.children();
        const id = parseInt(child[0].innerHTML);
        const path = window.location.pathname;
        confirmForm(function(confirm) {
            if(confirm)
            {
                if(path.includes('order')) {
                    tr.remove();
                    $.post(path + '/complete', { id: id }, function(id, number, status, jqXHR) {// success callback
                            alert("Kết thúc đơn thành công");
                    });
                }
            }
            });             
    });
    //Add form
    function toggleAddForm(e){
        e.preventDefault();
        $('#add').toggle(); // display:block or none
    }
    $('#cancel').click(toggleAddForm);
    $('#add-btn').click(toggleAddForm);
});