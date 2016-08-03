<script type="text/html" id="users-table-row-template">
    <td><%- firstname %></td>
    <td><%- lastname %></td>
    <td><%- email %></td>
    <td>
        <button id="showUsersBooks" class="btn btn-small btn-success js-return">Return a book</button>
        <button id="showFreeBooks" class="btn btn-small btn-default js-give">Take a free book</button>
        <button class="btn btn-small btn-warning js-edit">Edit</button>
        <button class="btn btn-small btn-danger pull-right js-delete">Delete</button>

    </td>
</script>