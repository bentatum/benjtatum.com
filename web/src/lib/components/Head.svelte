<script lang="ts">
	export let title: string;
	export let description: string;
	export let uri: string;
	export let ogType: string;
	export let ogImage: string;
	export let ogImageAlt: string;
	export let ogImageWidth: string;
	export let ogImageHeight: string;
	export let twitterCardType: string;
</script>

<title>{title}</title>
<meta name="description" content={description} />

<link rel="canonical" href={uri} />

<meta property="og:url" content={uri} />
<meta property="og:title" content={title} />
<meta property="og:type" content={ogType} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImage} />
<meta property="og:image:width" content={ogImageWidth} />
<meta property="og:image:height" content={ogImageHeight} />

<meta name="twitter:title" content={title} />
<meta name="twitter:site" content={uri} />
<meta name="twitter:card" content={twitterCardType} />
<meta name="twitter:image" content={ogImage} />
<meta name="twitter:image:alt" content={ogImageAlt} />
<meta name="twitter:description" content={description} />
