/*onMounted(async () => {
    const response = await axios.post(
      "https://shelly-86-eu.shelly.cloud/device/status",
      {
        id: "80646F827174",
        auth_key:
          "MWRmYzIxdWlk3C255D368FAAA95635EA81B568C136C66526F87F07896B53C91F33B90056C714E55A1E468EF8396B",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    apiData.value = await response.data.data.device_status;
    console.log(apiData);
  });
*/

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const image = document.getElementById('image');

    toggleButton.addEventListener('click', function() {
        if (image.src.endsWith('image1.jpg')) {
            image.src = 'image2.jpg';
            image.alt = 'Image 2';
        } else {
            image.src = 'image1.jpg';
            image.alt = 'Image 1';
        }
    });
});
