export const useHeroContent = () => {
  const heroContent = readonly(ref({
    badge: "/icons/1000.svg",
    badgeIcon: "/icons/education.svg",
    title: {
      normal: "مسیری هموار",
      highlighted: "برای رسیدن به اهداف",
      subtitle: "/images/academi-rama.png"
    },
    sliders:[
      {
        id:1,
        title:"ورکشاپ آموزش برنامه نویسی",
        image:"/images/chatgpt.png",
        description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان  چاپگرها و متون بلکه است."
      },
      {
        id:2,
        title:"ورکشاپ آموزش هوش مصنوعی",
        image:"/images/openai.png",
        description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان  چاپگرها و متون بلکه است."
      },
    ]
  }))

  const updateHeroContent = (newContent: Partial<typeof heroContent.value>) => {
    // This would be used for dynamic content updates
    console.log('Updating hero content:', newContent)
  }

  return {
    heroContent,
    updateHeroContent
  }
}