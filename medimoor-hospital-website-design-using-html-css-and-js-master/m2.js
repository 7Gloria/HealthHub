let localStream;
let remoteStream;
let peerConnection;

// Function to start the video call
async function startVideoCall() {
    try {
        // Get local user media (video and audio)
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        document.getElementById('localVideo').srcObject = localStream;

        // Create peer connection
        peerConnection = new RTCPeerConnection();

        // Add local stream to the connection
        localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

        // Set up event handlers for the connection
        peerConnection.onicecandidate = handleICECandidateEvent;
        peerConnection.ontrack = handleTrackEvent;

        // Create an offer to send to the other peer
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);

        // Send the offer to the other peer (in a real-world scenario, this would be sent to the doctor)
        // For simplicity, let's assume the doctor's peer connection is already set up
        const doctorAnswer = prompt("Enter the doctor's answer"); // In a real scenario, this would be received from the doctor
        const doctorAnswerDesc = new RTCSessionDescription({ type: 'answer', sdp: doctorAnswer });
        await peerConnection.setRemoteDescription(doctorAnswerDesc);

        // Enable the end button
        document.getElementById('endButton').disabled = false;
    } catch (error) {
        console.error('Error starting the video call:', error);
    }
}

// Function to end the video call
function endVideoCall() {
    // Close the peer connection
    if (peerConnection) {
        peerConnection.close();
        peerConnection = null;
    }

    // Stop the local stream
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localStream = null;
    }

    // Stop the remote stream
    if (remoteStream) {
        remoteStream.getTracks().forEach(track => track.stop());
        remoteStream = null;
    }

    // Disable the end button
    document.getElementById('endButton').disabled = true;
}

// Function to handle ICE candidate events
function handleICECandidateEvent(event) {
    if (event.candidate) {
        // In a real-world scenario, this candidate would be sent to the other peer
        // For simplicity, let's assume the doctor's peer connection is already set up
        const doctorCandidate = prompt("Enter the doctor's ICE candidate");
        peerConnection.addIceCandidate(new RTCIceCandidate(JSON.parse(doctorCandidate)));
    }
}

// Function to handle track events (receiving the remote stream)
function handleTrackEvent(event) {
    remoteStream = event.streams[0];
    document.getElementById('remoteVideo').srcObject = remoteStream;
}