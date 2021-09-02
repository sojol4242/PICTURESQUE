import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import './works.css';
const WorksGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const data = [
    {
      thumb: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Fashion photography is a genre of photography ",
      para: "Start by looking at the picture or imagining it in your head. Then, start describing the picture in the greatest detail that you can. Think about how that picture might inspire a story and jot down your thoughts; later on you can turn those notes into a full story.",
    },
    {
      thumb: "https://images.unsplash.com/photo-1615439935188-5e488fc6b764?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VlZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Weeding photography ",
      para: "Videography refers to the process of capturing moving images on electronic media (e.g., videotape, direct to disk recording, or solid state storage) and even streaming media. Nowadays, any video work could be called videography, whereas commercial motion picture production would be called cinematography.",
    },
    {
      thumb: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Sports(Stadium)",
      para: "Fashion photography focuses on the display of fashion clothing and items. It is most common on advertising boards and in fashion magazines. The photography will usually feature models wearing the display items. Fashion photography has existed almost as long as photography itself has been around.",
    },
     
    {
      thumb: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Interior photography ",
      para: "Start by looking at the picture or imagining it in your head. Then, start describing the picture in the greatest detail that you can. Think about how that picture might inspire a story and jot down your thoughts; later on you can turn those notes into a full story.",
    },
    {
      thumb: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Official",
      para: "Videography refers to the process of capturing moving images on electronic media (e.g., videotape, direct to disk recording, or solid state storage) and even streaming media. Nowadays, any video work could be called videography, whereas commercial motion picture production would be called cinematography.",
    },
    {
      thumb: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNwb3J0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Swimming",
      para: "Fashion photography focuses on the display of fashion clothing and items. It is most common on advertising boards and in fashion magazines. The photography will usually feature models wearing the display items. Fashion photography has existed almost as long as photography itself has been around.",
    },
    {
      thumb: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Travelling",
      para: "Fashion photography focuses on the display of fashion clothing and items. It is most common on advertising boards and in fashion magazines. The photography will usually feature models wearing the display items. Fashion photography has existed almost as long as photography itself has been around.",
    },
  ];
  const images = data.map((obj) => obj.thumb.replace("-small", "-large"));
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div id="works" className="text-center">
      <div className="row">
        <div className="services_head col-md-12 text-center m-auto">
          <h2 className="title">
            {" "}
            Our <span> Recent </span> Works
          </h2>
        </div>
      </div>

      <div className="container">
      <div className="row portfolio-items">
     
            {data.map(({ title, thumb }, index) => (
              <div key={index} onClick={() => openImageViewer(index)} className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item cursor p-3">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4 className="px-3">{title}</h4>
                    </div>
                    <img src={thumb} alt="Project Title" height="320px" width="100%"/>{" "}
                  </div>
                </div>
              </div>
            ))}
        

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          backgroundStyle={{ zIndex: 99999 }}
          currentIndex={currentImage}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default WorksGallery;
