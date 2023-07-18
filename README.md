# The Book Club
Come join the Book Club! A space to share your favorite books of all genres and to find new reads!
## Technologies Used
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Express JS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## Getting Started
[Launch the app](https://the-book-club-janica-2b263a1d2c2c.herokuapp.com/)

## Code Preview
```html
<%- include('../partials/header') %>

    <div class="table-striped">
        <table class="table justify-content-center">
            <div>Title: </div>
            <div><%= book.title %></div>
            <br>
            <div> Author: </div>
            <div><%= book.author %></div>
            <br>
            <div> Publish Year: </div>
            <div><%= book.publishYear %></div>
            <br>
            <div> Genre: </div>
            <div><%= book.genre %></div>
            <br>
            <div> Description: </div>
            <div><%= book.description %></div>
        </table>
    </div>
   <!-- edit -->
   <a class="btn btn-outline-info" href="/books/<%= book._id %>/edit">Edit Book Rec</a>
    <!-- ratings -->
    <br><br><h2>Ratings</h2>
    <form id="add-rating-form" method="POST" action="/books/<%= book._id %>/ratings">
        <label>Rating:</label>
        <select name="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10" selected>10</option>
        </select>
        <input class="btn btn-outline-info" type="submit" value="Rate the book">
    </form>

    <% if (book.ratings.length) { %>
        <table class="table">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Date</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
            <% let total = 0 %>
            <% book.ratings.forEach(function(r) { %>
                <% total += r.rating %>
                <tr>
                    <td id="rating-user"><img alt="avatar" src="<%= r.userAvatar %>" referrerpolicy="no-referrer" ><%= r.userName %></td>
                    <td><%= r.createdAt.toLocaleDateString() %></td>
                    <td><%= r.rating %></td>
                    <td>
                        <form action="/ratings/<%= r._id %>?_method=DELETE" id="delete-form" method="POST">
                            <button type="submit" class="btn btn-outline-danger">Delete</button>
                        </form>
                    </td>
                </tr><br><br>
            <% }); %>
            <tr>
                <td colspan="2"></td>
                <td><strong><%= (total / book.ratings.length).toFixed(1) %></strong></td>
            </tr>
            </tbody>
        </table>
    <% } else { %>
        <h5>No Ratings Yet</h5>
    <% } %>

<%- include('../partials/footer') %>
```