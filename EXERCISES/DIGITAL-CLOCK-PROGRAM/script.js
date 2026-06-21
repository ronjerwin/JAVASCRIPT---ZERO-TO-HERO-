
const clockTime = document.getElementById("clockTime");

setInterval(() => {
  const date = new Date();
  
  // Get components
  let hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');

  // Determine AM/PM
  const ampm = hour >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  // 12 becomes 12, 13 becomes 1, 0 (midnight) becomes 12
  hour = hour % 12 || 12; 
  
  // Pad the hour to two digits
  const displayHour = hour.toString().padStart(2, '0');

  clockTime.textContent = `${displayHour}:${minute}:${second} ${ampm}`;
}, 1000); // 1000ms is sufficient for a clock