import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "vvietfrx",
    dataset: "production",
    useCdn: true,
});