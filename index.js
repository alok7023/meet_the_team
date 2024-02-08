//Team Data
const team = [
    {
      id: "anna",
      fullName: "Anna Kendrick",
      jobTitle: "Front-end Ninja",
      bio: "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
      avatar: "/session5-takehome/avataaars/annakendrick.svg",
    },
    {
      id: "harry",
      fullName: "Harry Fawn",
      jobTitle: "Illustrator",
      bio: "Creates new illustrations each week, will kill for coffee, and loves beaches",
      avatar: "/session5-takehome/avataaars/harryfn.svg",
    },
    {
      id: "sofia",
      fullName: "Sofia Sultan",
      jobTitle: "Backend Engineer",
      bio: "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
      avatar: "/session5-takehome/avataaars/sofiasul.svg",
    },
  ];
  
  //Modify Code below this line
  
  //Content Selected using ID.
  const content = document.getElementById("content");
  
  /**
   * Creates and img HTML element with given src and alt
   * @param {string} src - Source for image
   * @param {string} alt - Alt text for image
   * @returns An Image HTML Element
   */
  const getImageElement = (src, alt) => {
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.height = 100;
    image.width = 100;
    return image;
  };
  
  /**
   * Creates a new card with passed parameters.
   * @param {string} id - Unique id from team data
   * @param {string} fullName - Name of the team member
   * @param {string} jobTitle - Job title of the team memeber
   * @param {string} bio - Description Bio
   * @param {string} avatar - Source of the avatar image.
   * @returns section HTML element with Image and Text
   */
  function generateCard(id, fullName, jobTitle, bio, avatar) {
    //1. Create a new "section" element and set the className and id
  
    //2. Generate the image using getImageElement() function
    //Hint - Use fullname as alt for the image.
  
    //3. Create a div for text content
  
    //4. Create an h2 for fullName
  
    //5. Create an h3 for jobTitle
  
    //6. Create a p for bio
  
    //7. Append the fullName, jobTitle, and bio element
    //   to the div created for text.
  
    //8. Append the Image and the Text div
    //   to the new section you created in step 1
  
    //Return the new section element created.
    let card = document.createElement("section");
    card.id = id;
    card.classList.add("team-member");
  
    const img = getImageElement(avatar, fullName);
    card.appendChild(img);
  
    const textContainer = document.createElement("div");
  
    const heading1 = document.createElement("h2");
    heading1.textContent = fullName;
    textContainer.appendChild(heading1);
  
    const heading2 = document.createElement("h2");
    heading2.textContent = jobTitle;
    textContainer.appendChild(heading2);
  
    const para = document.createElement("p");
    para.textContent = bio;
    textContainer.appendChild(para);
  
    card.appendChild(textContainer);
    return card;
  }
  
  /**
   * Generates and returns an array of HTML elements
   * @param {Array} data Team data array
   */
  function generateCardArray(data) {
    const cards = [];
    //Add logic to populate `cards` array below
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      let element = generateCard(
        item.id,
        item.fullName,
        item.jobTitle,
        item.bio,
        item.avatar
      );
      cards.push(element);
    }
    console.log(cards);
    //Return cards array
    return cards;
  }
  
  const cardsArray = generateCardArray(team);
  
  //Run a loop for the cardsArray and append its elements to content.
  for (let card of cardsArray) {
    content.append(card);
  }
  //Modify Code above this line
  