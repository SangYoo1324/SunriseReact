import React from 'react';
import GenericListCard from '../common/GenericListCard';

function ResourcesList(props) {

    const cards = [
        {
          title: 'Area Assistance Programs',
          description: 'Having trouble making ends meet? Learn about some of the area assistance organizations and programs.',
          imageUrl: '/assets/resources/areaAssistantProgram.jpg',
          link: '/programs',
        },
        {
          title: 'Daily Devotional',
          description: 'Take a few minutes to focus and consider the bible verse given for the day in your life.',
          imageUrl: '/assets/resources/dailyDevotional.jpg',
          link: 'https://www.upperroom.org',
        },

              {
          title: 'Electric Giving',
          description: 'Link for Electric Giving',
          imageUrl: '/assets/resources/donation.jpg',
          link: 'https://secure.myvanco.com/YPTG/home',
        },
        {
          title: 'Photo Gallery',
          description: 'Sunrise Comminity Church\'s special memories',
          imageUrl: '/assets/resources/eventPhoto_bubble.jpg',
          link: '/photos',
        },
        {
            title: 'Oremus Bible Browser',
            description: 'Read the Bible online or look up Bible verses',
            imageUrl: '/assets/resources/resources_bubble.jpg',
            link: 'https://bible.oremus.org',
          },
      ];

    return (
        <section>
            <div className='boot-container'>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {cards.map((card, index) => (
        <GenericListCard
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          link={card.link}
          isSimplePhotoTitle={false}
        />
      ))}
    </div>
            </div>
        </section>
    );
}

export default ResourcesList;