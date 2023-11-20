document.addEventListener('DOMContentLoaded', function () {
    const serverURI = 'http://192.168.1.134';
    let deviceStatus = {
      temperature: 0,
      uptime: 0,
      wifi: { connected: false },
      cloud: { enabled: false, connected: false }
    };
    let deviceState = 'off';
  
    async function fetchDataFromServer() {
      try {
        const response = await fetch(`${serverURI}/status`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: "4022d88e30e8",
            authKey: "MWRmYzIxdWlk3C255D368FAAA95635EA81B568C136C66526F87F07896B53C91F33B90056C714E55A1E468EF8396B"
          }),
        });
  
        const responseData = await response.json();
        deviceStatus = responseData.data.device_status;
        updateUI();
      } catch (error) {
        console.error(error);
      }
    }
  
    function updateUI() {
      document.getElementById('temperature').innerText = `${deviceStatus.temperature} °`;
      document.getElementById('uptime').innerText = deviceStatus.uptime ? `${deviceStatus.uptime} seconds` : 'Offline';
      document.getElementById('wifi').innerText = deviceStatus.wifi.connected ? 'Online' : 'Offline';
      document.getElementById('cloud').innerText = deviceStatus.cloud.enabled ? 'Enabled' : 'Disabled';
      document.getElementById('cloud').innerText += deviceStatus.cloud.connected ? ', Connected' : ', Disconnected';
    }
  
    async function rebootDevice() {
      try {
        await fetch(`${serverURI}/reboot`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: "4022d88e30e8",
            authKey: "MWRmYzIxdWlk3C255D368FAAA95635EA81B568C136C66526F87F07896B53C91F33B90056C714E55A1E468EF8396B"
          }),
        });
  
        alert('Successfully rebooted');
      } catch (error) {
        console.error(error);
      }
    }
  
    async function toggleDevice() {
      const newState = deviceState === 'on' ? 'off' : 'on';
  
      try {
        await fetch(`${serverURI}/relay/0?turn=${newState}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: "4022d88e30e8",
            authKey: "MWRmYzIxdWlk3C255D368FAAA95635EA81B568C136C66526F87F07896B53C91F33B90056C714E55A1E468EF8396B"
          }),
        });
  
        deviceState = newState;
        alert(`Successfully turned ${deviceState}`);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchDataFromServer();
  });
  
