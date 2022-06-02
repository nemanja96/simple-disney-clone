import React from 'react';
import Card from './Card';
import Link from 'next/link';

function Section({genre, videos}) {
  return (
    <div className="section">
        <h3>{genre}</h3>
        <div className="video-items">
            {videos.map(video => (
                <Link key={video.id} href={`/video/${video.slug}`}>
                  <a>
                    <Card title={video.title} tags={video.tags} thumbnail={video.thumbnail} />
                  </a>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Section