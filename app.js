// Get video_url and subtitle_url from request parameters
var video_url = window.location.search.split('video_url=')[1];
var subtitle_url = window.location.search.split('subtitle_url=')[1];

// Decode URL parameters
video_url = decodeURIComponent(video_url);
if (subtitle_url) {
  subtitle_url = decodeURIComponent(subtitle_url);
}

const playlistItem = {
  sources: [
    {
      file: video_url,
      label: "video",
      default: true
    }
  ]
};

// Add captions only if subtitle_url exists
if (subtitle_url) {
  playlistItem.captions = [
    {
      file: subtitle_url,
      label: "subtitle",
      kind: "captions"
    }
  ];
}


const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  
  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },
  
  playlist: [playlistItem]
});
