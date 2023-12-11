const Contenu1 = () => {
  return (
    <div class='relative flex items-center justify-center h-screen mb-12 mt-12 overflow-hidden'>
      <div class='relative z-30 p-5 text-2xl text-white font-bold bg-opacity-50 rounded-xl'>
        Bienvenue sur le site officiel de l'E.S Arques Tennis
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute  w-full min-w-full min-h-full max-w-none'
      >
        <source
          src='https://cdn.discordapp.com/attachments/713332437987622962/1182674781494059085/video_presentation_ES_Arques_tennis_club_1.mp4?ex=65858eb8&is=657319b8&hm=c0f122ab1db28b2b1f5c702074a2e626c6548f26cce2c6e0c9fc1acde43b7624&'
          type='video/mp4'
        />
      </video>
    </div>
  )
}

export default Contenu1
