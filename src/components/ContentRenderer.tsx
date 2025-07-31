import React from "react";
import { Card, Row, Col, Ratio, Container } from "react-bootstrap";
import { ContentSection } from "../data/projects";
import PDFViewer from "./PDFViewer";
const pdfFile = require('../assets/ComputerGraphicsFinalProject.pdf');

interface ContentRendererProps {
  sections: ContentSection[];
  smallImgStyle?: React.CSSProperties;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ 
  sections, 
  smallImgStyle = { maxWidth: 750, width: "100%", height: "auto", margin: "0 auto", display: "block" }
}) => {
  const renderSection = (section: ContentSection, index: number) => {
    switch (section.type) {
      case 'text':
        return (
          <Card.Text key={index} className={section.className}>
            {section.content as string}
          </Card.Text>
        );
      
      case 'image':
        const getImageStyle = () => {
          switch (section.imageSize) {
            case 'small':
              return { maxWidth: 400, width: "100%", height: "auto", margin: "0 auto", display: "block" };
            case 'large':
              return { maxWidth: 1000, width: "100%", height: "auto", margin: "0 auto", display: "block" };
            default: // medium or undefined
              return smallImgStyle;
          }
        };
        return (
          <Card.Img 
            key={index}
            variant="top" 
            src={section.content as string} 
            alt="Content"
            className={section.className}
            style={getImageStyle()}
          />
        );
      
      case 'video':
        const videoSrc = section.content as string;
        if (videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be')) {
          return (
            <Ratio key={index} aspectRatio="16x9" className={section.className}>
              <iframe
                src={videoSrc}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 0 }}
              />
            </Ratio>
          );
        } else {
          return (
            <Ratio key={index} aspectRatio="16x9" className={section.className}>
              <video controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Ratio>
          );
        }
      
      case 'image-grid':
        const imageGrid = section.content as { src: string; alt: string }[];
        return (
          <Container key={index} className={`d-flex justify-content-center ${section.className || ''}`}>
            <Row className="justify-content-center">
              {imageGrid.map((img, imgIndex) => (
                <Col key={imgIndex} md={12 / imageGrid.length} className="d-flex justify-content-center">
                  <Card.Img 
                    src={img.src} 
                    alt={img.alt} 
                    className="mb-2" 
                    style={smallImgStyle}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        );
      
      case 'video-grid':
        const videoGrid = section.content as { src: string; title: string }[];
        return (
          <Row key={index} className={section.className || ''}>
            {videoGrid.map((video, videoIndex) => (
              <Col key={videoIndex} xs={12} md={6} className="d-flex justify-content-center mb-3">
                <Ratio aspectRatio="16x9" style={{ maxWidth: 500, width: '100%' }}>
                  <video controls style={{ width: '100%' }}>
                    <source src={video.src} type='video/mp4' />
                  </video>
                </Ratio>
              </Col>
            ))}
          </Row>
        );
      
      case 'pdf':
        // Use imported file if content matches our known PDF, else fallback to string
        const fileUrl = section.content as string;
        return (
          <div key={index} className={section.className} style={{ width: '100%', height: '700px', margin: '2rem 0' }}>
            <iframe
              src={fileUrl}
              title="PDF Viewer"
              width="100%"
              height="100%"
              style={{ border: 0 }}
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      {sections.map((section, index) => renderSection(section, index))}
    </>
  );
};

export default ContentRenderer; 