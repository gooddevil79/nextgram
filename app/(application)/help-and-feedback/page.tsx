"use client";
import { siteConfig } from "@/config/site";
import { Accordion, AccordionItem, Button, Link } from "@nextui-org/react";

const HelpAndFeedbackPage = function () {
	const items = [
		{
			title: "How to sign up?",
			description: "Steps to create a new account on Nextgram.",
			answer:
				"To sign up on Nextgram, click on the 'Sign Up' button on the homepage. Fill in your email, choose a unique username, and create a strong password. After completing the form, click 'Create Account'. You will receive a confirmation email with a verification link. Click the link to activate your account and start using Nextgram.",
		},
		{
			title: "How to reset my password?",
			description:
				"Instructions to reset your password if you have forgotten it.",
			answer:
				"If you've forgotten your password, go to the sign-in page and click 'Forgot Password'. Enter your registered email address and click 'Send Reset Link'. Check your email inbox for a message from Nextgram. Click the link in the email and follow the instructions to set a new password. Once reset, you can log in with your new password.",
		},
		{
			title: "How to create a blog post?",
			description:
				"Guidance on creating and publishing a blog post on Nextgram.",
			answer:
				"To create a blog post, log in to your Nextgram account and navigate to your profile. Click the 'Create Post' button, which will open the post editor. Add a captivating title, write your content, and include images or other media if desired. When you're satisfied with your post, click 'Publish' to make it live on your profile and visible to your followers.",
		},
		{
			title: "How to share a blog post?",
			description: "Steps to share a blog post on Nextgram.",
			answer:
				"To share a blog post, locate the post you want to share and click on the 'Share' icon beneath it. You can choose to share the post on various social media platforms such as Facebook, Twitter, or LinkedIn. Alternatively, you can copy the link and share it directly with friends or colleagues via email or messaging apps.",
		},
		{
			title: "How to edit or delete a blog post?",
			description:
				"Instructions to modify or remove a blog post you have created.",
			answer:
				"To edit or delete a blog post, go to your profile and find the post you want to change. Click on the 'Options' button (represented by three dots) on the post. Select 'Edit' to open the post editor where you can make changes and then save. To delete the post, select 'Delete' and confirm your decision. The post will be permanently removed from your profile.",
		},
		{
			title: "How to manage my privacy settings?",
			description: "Details on configuring your privacy settings on Nextgram.",
			answer:
				"To manage your privacy settings, go to your profile and click on 'Settings'. Navigate to the 'Privacy' section where you can adjust various options such as who can see your posts, who can follow you, and who can send you direct messages. Customize these settings to control your visibility and interactions on Nextgram according to your preferences.",
		},
		{
			title: "How to enable dark theme?",
			description: "Steps to switch to the dark theme on Nextgram.",
			answer:
				"To enable the dark theme on Nextgram, go to your profile and click on 'Settings'. Navigate to the 'Appearance' section. Toggle the 'Dark Theme' switch to turn on the dark mode. This will change the interface to a darker color scheme, which can be easier on the eyes, especially in low-light environments. You can switch back to the light theme by toggling the switch off.",
		},
		{
			title: "How to report a problem or provide feedback?",
			description:
				"Information on reporting issues or providing feedback about Nextgram.",
			answer:
				"If you encounter an issue or want to provide feedback about Nextgram, go to the 'Help & Feedback' section in the settings menu. Click on 'Report a Problem' to describe the issue you are facing or 'Send Feedback' to share your thoughts and suggestions. Fill in the necessary details and click 'Submit'. Our support team will review your message and get back to you as soon as possible.",
		},
	];

	return (
		<div>
			<Accordion selectionMode="single" variant="bordered" isCompact>
				{items.map(itm => (
					<AccordionItem
						key={itm.title}
						aria-label="Accordion 1"
						title={itm.title}
					>
						<h2 className="text-xl">{itm.description}</h2>
						<p>{itm.answer}</p>
					</AccordionItem>
				))}
			</Accordion>

			<div className="space-y-2 flex justify-center items-center flex-col  text-center max-w-5xl mx-auto my-5">
				<h2 className="text-xl">
					Didn't find the answer you were looking for?
				</h2>
				<p>
					If you couldn't find the answer you were looking for, you can create
					an issue in our{" "}
					<Link target="_blank" href={siteConfig.links.repo}>
						GitHub repository
					</Link>
					. Visit our{" "}
					<Link target="_blank" href={siteConfig.links.github}>
						GitHub page
					</Link>
					, navigate to the 'Issues' section, and click 'New Issue'. Provide a
					detailed description of your problem or suggestion, and our
					development team will review and address it as soon as possible.
				</p>
				<Button href={siteConfig.links.repo}>Create an Issue</Button>
			</div>
		</div>
	);
};

export default HelpAndFeedbackPage;
