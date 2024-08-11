import React, { useState } from 'react';
import axios from "axios";
import FormData from "form-data";

function ImageGenerator() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleGenerate = async () => {
    const payload = {
        prompt: "Lighthouse on a cliff overlooking the ocean",
        output_format: "webp"
      };
      const apiKey = process.env.STABLITY_AI_KEY;
    try {
      // Make a request to your server with the text
      const response = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/generate/core`,
        axios.toFormData(payload, new FormData()),
        {
          validateStatus: undefined,
          responseType: "arraybuffer",
          headers: { 
            Authorization: `Bearer ${apiKey}`, 
            Accept: "image/*" 
          },
        },
      );

      // Assuming the server responds with an image URL
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
        style={{ width: '300px', height: '100px' }}
      />
      <br />
      <button onClick={handleGenerate} style={{ marginTop: '10px' }}>
        Generate
      </button>
      <br />
      {imageUrl && <img src={imageUrl} alt="Generated" style={{ marginTop: '20px' }} />}
    </div>
  );
}

export default ImageGenerator;