<script type="text/html" id="books-table-row-template">

    <td><%- title %></td>
    <td><%- author %></td>
    <td><%- genre %></td>
    <td><%- year %></td>
    <td><%- user_id %></td>
    <td>
        <button class="btn btn-small btn-warning js-edit">Edit</button>
        <button id="book_del_button" class="btn btn-small btn-danger pull-right js-delete">Delete</button>

    </td>

</script>