/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function ($) {
    const siteNavigation = document.getElementById('site-navigation');

    // Return early if the navigation doesn't exist.
    if (!siteNavigation) {
        return;
    }

    const button = siteNavigation.getElementsByTagName('button')[0];

    // Return early if the button doesn't exist.
    if ('undefined' === typeof button) {
        return;
    }

    const menu = siteNavigation.getElementsByTagName('ul')[0];

    // Hide menu toggle button if menu is empty and return early.
    if ('undefined' === typeof menu) {
        button.style.display = 'none';
        return;
    }

    if (!menu.classList.contains('nav-menu')) {
        menu.classList.add('nav-menu');
    }

    // Toggle the .toggled class and the aria-expanded value each time the button is clicked.
    button.addEventListener('click', function () {
        siteNavigation.classList.toggle('toggled');

        if (button.getAttribute('aria-expanded') === 'true') {
            button.setAttribute('aria-expanded', 'false');
        } else {
            button.setAttribute('aria-expanded', 'true');
        }
    });

    // Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
    document.addEventListener('click', function (event) {
        const isClickInside = siteNavigation.contains(event.target);

        if (!isClickInside) {
            siteNavigation.classList.remove('toggled');
            button.setAttribute('aria-expanded', 'false');
        }
    });

    // Get all the link elements within the menu.
    const links = menu.getElementsByTagName('a');

    // Get all the link elements with children within the menu.
    const linksWithChildren = menu.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

    // Toggle focus each time a menu link is focused or blurred.
    for (const link of links) {
        link.addEventListener('focus', toggleFocus, true);
        link.addEventListener('blur', toggleFocus, true);
    }

    // Toggle focus each time a menu link with children receive a touch event.
    for (const link of linksWithChildren) {
        link.addEventListener('touchstart', toggleFocus, false);
    }

    /**
     * Sets or removes .focus class on an element.
     */
    function toggleFocus() {
        if (event.type === 'focus' || event.type === 'blur') {
            let self = this;
            // Move up through the ancestors of the current link until we hit .nav-menu.
            while (!self.classList.contains('nav-menu')) {
                // On li elements toggle the class .focus.
                if ('li' === self.tagName.toLowerCase()) {
                    self.classList.toggle('focus');
                }
                self = self.parentNode;
            }
        }

        if (event.type === 'touchstart') {
            const menuItem = this.parentNode;
            event.preventDefault();
            for (const link of menuItem.parentNode.children) {
                if (menuItem !== link) {
                    link.classList.remove('focus');
                }
            }
            menuItem.classList.toggle('focus');
        }
    }


    /*    const ajax = function(ajax_object) {
            /!*
                function fetchData(callback) {
                    callback('text');
                }

                function handleData(text) {
                    return console.log('data handled' + text);
                }

                fetchData(handleData);
            *!/

            /!*    $.ajax({
                    url: 'http://autods.local/wp-json/wp/custom_post_title',
                    type: 'GET',
                    success: function (response) {
                        console.log("Wow, it worked!", response);
                        response.appendTo('#primary');
                    }
                })*!/

            /!*        async function fetch_data() {
                        let response = await fetch('http://autods.local/wp-json/wp/custom_post_title');
                        let data = await response.json();
                        console.log(data);
                    }

                    fetch_data();

                    fetch('http://autods.local/wp-json/wp/custom_post_title')
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (response) {
                            console.log(response);
                        });*!/

            /!*    $('#ajax-form .submit').on('click', function (e) {
                    const formData = $(this).parent('#ajax-form').serialize();
                    console.log(formData);  // Log the serialized form data to check what’s being sent

                    // Send AJAX request
                    $.ajax({
                        url: ajax_object.ajax_url,
                        type: 'POST',
                        data: {
                            action: 'process_form',  // The action you hooked to
                            form_data: formData,
                        },
                        success: function (receivingData) {
                            console.log(receivingData);  // Log the entire response object
                            console.log(receivingData.data.form_data);  // Log the form data returned from PHP

                            // You can access and display the form data here if needed
                            $('#response').html(`<p>${response.message}</p>`);  // Display success message
                        },
                        error: function () {
                            $('#response').html('<p>There was an error. Please try again.</p>');  // Handle errors
                        },
                    });
                    return false;
                });*!/

            document.querySelector('#ajax-form .submit').addEventListener('click', (e) => {
                e.preventDefault();  // Prevent form submission

                const form = e.target.closest('#ajax-form');
                const formData = new FormData(form);  // Collect form data using FormData

                console.log(formData);

                const data = {
                    action: 'process_form',
                    form_data: new URLSearchParams(formData).toString()  // Convert FormData to a query string
                };

                // Send POST request using Fetch API
                fetch(ajax_object.ajax_url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams(data).toString(),  // Convert data to query string format
                })
                    .then((response) => response.json())
                    .then((response) => {
                        console.log(response.data.form_data);  // Log form data
                        document.querySelector('#ajax-form .submit').textContent = response.data.message;  // Update submit button text
                    })
                    .catch((error) => {
                        console.error('Error:', error);  // Handle any potential errors
                    });
            });

            /!*        async function fetchPosts() {
                        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
                        const posts = await data.json();
                        const container = document.getElementById('posts-container');
                        posts.slice(0, 5).forEach(post => {
                            const postElement = document.createElement('div');
                            postElement.classList.add('post');
                            postElement.textContent = post.title;
                            postElement.innerHTML =
                                `<h2 class="title">${post.title}</h2>
                                   <span class="id">${post.id}</span>
                                    `;

                            container.appendChild(postElement);
                        });
                    }
                    fetchPosts();*!/

            /!*    $.ajax({
                    url: 'https://jsonplaceholder.typicode.com/posts',
                    type: 'GET',
                    success: function (response) {
                        console.log("Wow, it worked!", response);
                        const container = $('#posts-container');
                        response.slice(0,3).forEach(function (post) {
                            container.append('<div class="post">' + post.title + '</div>');
                        });
                    }
                })*!/
        }*/


})(jQuery);
