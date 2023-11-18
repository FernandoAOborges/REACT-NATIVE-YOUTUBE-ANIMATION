import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { VideoCard, YouTubeReanimated } from './src/components';
import { IVideoCardProps } from './src/types/Types';

const DATA: IVideoCardProps[] = [
  {
    id: 1,
    channelLogo: 'https://i.pravatar.cc/150?img=32',
    thumbnail: 'https://picsum.photos/720/480?random=1',
    title: 'Exploring the Majestic Mountains of Switzerland',
    channelTitle: 'Nature Explorer   500k views  1 month ago',
    channelName: 'Nature Explorer',
  },
  {
    id: 2,
    channelLogo: 'https://i.pravatar.cc/150?img=33',
    thumbnail: 'https://picsum.photos/720/480?random=2',
    title: "A Culinary Journey Through Italy's Best Eateries",
    channelTitle: 'Foodie Adventures   250k views  2 weeks ago',
    channelName: 'Foodie Adventures',
  },
  {
    id: 3,
    channelLogo: 'https://i.pravatar.cc/150?img=34',
    thumbnail: 'https://picsum.photos/720/480?random=3',
    title: 'Discovering the Hidden Gems of Tokyo',
    channelTitle: 'Urban Explorer   800k views  3 months ago',
    channelName: 'Urban Explorer',
  },
  {
    id: 4,
    channelLogo: 'https://i.pravatar.cc/150?img=35',
    thumbnail: 'https://picsum.photos/720/480?random=4',
    title: 'Top 10 Beaches to Visit in the Caribbean',
    channelTitle: 'Travel Paradise   1m views  6 months ago',
    channelName: 'Travel Paradise',
  },
];

type ISelectedVideoProps = IVideoCardProps | null;

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState<ISelectedVideoProps>(null);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <GestureHandlerRootView>
        <ScrollView>
          {DATA?.map((item) => (
            <VideoCard key={item.id} data={item} setSelectedVideo={setSelectedVideo} />
          ))}
        </ScrollView>
        {selectedVideo && (
          <YouTubeReanimated selectedVideo={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;
