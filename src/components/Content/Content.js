import React from "react";
import Book from "./Images/Book.png";
const Content = () => {
    return (
<div class="container">
<div class="text-center">
  <h1>Book title</h1>
  <img src={Book} class="rounded"></img><br></br>
  <span class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae facilisis purus, eu pulvinar neque. Maecenas pulvinar eros nec enim pulvinar, et rutrum diam pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce neque leo, lacinia id hendrerit mollis, vestibulum at velit. Vivamus vel dui libero. Proin sit amet tellus condimentum, semper metus eget, varius sapien. Lorem ipsum dolor sit amet.</span>
</div>
</div>
        );
};

export default Content;