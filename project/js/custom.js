document.addEventListener("DOMContentLoaded", () => {
    // Dummy Data
    const eventData = {
      days: 5,
      participants: 120,
      presentations: 20,
      hours: 30,
      photographs: [
        "photo1.jpg",
        "photo2.jpg",
        "photo3.jpg"
      ]
    };
  
    // Populate Stats
    document.getElementById("days").textContent = eventData.days;
    // Repeat for participants, presentations, hours
  
    // Populate Gallery
    const galleryContainer = document.querySelector(".gallery-container");
    eventData.photographs.forEach(photo => {
      const img = document.createElement("img");
      img.src = `images/${photo}`;
      galleryContainer.appendChild(img);
    });
  });
  