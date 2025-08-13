export const useAboutContent = () => {
  const aboutContent = readonly(ref({
    title: "درباره آکادمی راما",
    description: [
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."    ],
    buttonText: "ادامه مطلب",
    video: {
      url: "/videos/about-video.mp4", // You'll need to add your video file
      thumbnail: "/images/video-thumbnail.png", // Video poster/thumbnail
      overlayText: "لورم ایپسوم یک متن ساختگی برای این عنوان می باشد"
    }
  }))

  const updateAboutContent = (newContent: Partial<typeof aboutContent.value>) => {
    // This function can be used to dynamically update content
    // For example, from a CMS or API
    console.log('Updating about content:', newContent)
    
    // In a real application, you might do something like:
    // Object.assign(aboutContent.value, newContent)
  }

  // Function to update just the video content
  const updateVideoContent = (videoData: Partial<typeof aboutContent.value.video>) => {
    console.log('Updating video content:', videoData)
    // Object.assign(aboutContent.value.video, videoData)
  }

  // Function to update description paragraphs
  const updateDescription = (newDescription: string[]) => {
    console.log('Updating description:', newDescription)
    // aboutContent.value.description = newDescription
  }

  return {
    aboutContent,
    updateAboutContent,
    updateVideoContent,
    updateDescription
  }
}