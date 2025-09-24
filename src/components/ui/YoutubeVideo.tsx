import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import YouTube, { YouTubePlayer } from 'react-youtube';

interface IVideo {
	title: string;
	className?: string;
	image: string;
	url: string;
	stop?: boolean;
}

const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
const YoutubeVideo: React.FC<IVideo> = ({
	title,
	className,
	image,
	url,
	stop,
}) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [id, setId] = useState('');
	const [videoElement, setVideoElement] = useState<YouTubePlayer | null>(
		null,
	);
	useEffect(() => {
		if (stop) {
			setIsPlaying(false);
		}
	}, [stop]);
	useEffect(() => {
		if (url && url.trim() !== '') {
			const match = url.match(regExp);
			if (match && match[1] && match[1].length === 11) { // YouTube video IDs are always 11 characters
				const videoId = match[1];
				setId(videoId);
			} else {
				console.warn('Invalid YouTube URL or video ID:', url);
				setId('');
			}
		} else {
			setId('');
		}
	}, [url]);

	const opts = {
		playerVars: {
			autoplay: 0,
		},
	};

	const _onReady = (event: YouTubePlayer) => {
		setVideoElement(event);
	};

	const handleClick = (event: any) => {
		setIsPlaying(true);
	};

	useEffect(() => {
		if (!videoElement) return;
		if (!isPlaying) return;

		if (
			videoElement &&
			videoElement.target &&
			videoElement.target.playVideo
		) {
			videoElement.target.playVideo;
		}
		if (stop) {
			setIsPlaying(false);
		}
	}, [isPlaying]);

	// Don't render if no valid URL or video ID
	if (!url || url.trim() === '' || !id || id.length !== 11) {
		return (
			<div className={`darb-video ${className}`}>
				<div className="iframe-container youtube-player min-h-[266px] flex items-center justify-center bg-gray-200">
					<p className="text-gray-500">Invalid video URL</p>
				</div>
			</div>
		);
	}

	return (
		<div
			className={
				!isPlaying
					? `darb-video play ${className}`
					: `darb-video ${className}`
			}
		>
			<div
				className="iframe-container youtube-player min-h-[266px] relative"
				onClick={handleClick}
			>
				<Image src={image} fill={true} sizes="100vw" alt={title} />

				<YouTube
					className="player"
					videoId={id}
					opts={opts}
					onReady={_onReady}
				/>
			</div>
		</div>
	);
};

export default YoutubeVideo;
