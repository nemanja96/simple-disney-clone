import React from 'react';
import Card from './Card';
import Link from 'next/link';

function Section({genre, videos}) {
  console.log(videos)
  return (
    <div className="section">
        <h3>{genre}</h3>
        <div className="video-items">
            {videos.map(video => (
                <a key={video.id} href={`/video/${video.slug}`}>
                    <Card title={video.title} tags={video.tags} thumbnail={video.thumbnail} />
                </a>
            ))}
        </div>
    </div>
  )
}

export default Section