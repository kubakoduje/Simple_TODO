$(function () {

    function add() {
        const value = $('input').val();
        const el = $('.element').length + 1;
        if (!value == '') {
            let template = `
            <li class="element">
                <div>
                    <p class="number">Task number ${el}</p>
                    <p class="text">${value}</p>
                </div>
                <div class="icons">
                    <i class="fa fa-pencil-square-o edit" aria-hidden="true"></i>
                    <i class="fa fa-clone copy" aria-hidden="true"></i>
                    <i class="fa fa-trash delete" aria-hidden="true"></i>
                <div class="icons">
            </li>
        `;
            $('input').val('');

            $('.list').append(template);
        }
    }

    function save(e) {
        const value = $(e).parent().find('input').val();
        const save = `
                <li class="element">
                <p>${value}</p>
                <div class="icons">
                    <i class="fa fa-pencil-square-o edit" aria-hidden="true"></i>
                    <i class="fa fa-clone copy" aria-hidden="true"></i>
                    <i class="fa fa-trash delete" aria-hidden="true"></i>
                <div class="icons">
            </li>          
            `;
        $(e).parent().replaceWith(save);
    }

    function update(){
        const elements = $('.element')
        const number = elements.find('.number');
        elements.each(function (index, element) {
          $(element).find('.number').text(`Task number ${index + 1}`)
        })
    }

    $('.add').on('click', function () {
        add()
    });

    $(window).on('keypress', function (e) {
        if (e.keyCode === 13) {
            add();
        }
    });

    $('.list').on('click', '.delete', function () {
        $(this).parent().parent().remove();
        update();
    });

    $('.list').on('click', '.copy', function () {
        $('.list').append($(this).parent().parent().clone());
        update();
    });

    $('.list').on('click', '.edit', function () {
        const editable = $(this).parent().parent();
        const value = $(this).parent().parent().find('.text').text();
        console.log(value);
        const input = `
                <li>
                    <input type="text" value='${value}'>
                    <i class="fa fa-floppy-o save" aria-hidden="true"></i>
                </li>            
            `;
        editable.replaceWith(input);
    });

    $('.list').on('click', '.save', function () {
        const value = $(this).parent().find('input').val();
        const el = $('.element').length + 1;
        const save = `
                <li class="element">
                <div>
                    <p class="number">Task number ${el}</p>
                    <p class="text">${value}</p>
                </div>
                <div class="icons">
                    <i class="fa fa-pencil-square-o edit" aria-hidden="true"></i>
                    <i class="fa fa-clone copy" aria-hidden="true"></i>
                    <i class="fa fa-trash delete" aria-hidden="true"></i>
                <div class="icons">
            </li>          
            `;
        $(this).parent().replaceWith(save);
        update();
    });

    $('.list').on('click', '.save', function (e) {
        save(this);
    });

    $('.remove').on('click', function () {
        $('.element').last().remove();
    });

    $('.clear').on('click', function () {
        $('.element').each((indx, el) => {
            $(el).remove();
        })
    });
});