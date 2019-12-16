# Google Drive Integrations

**Motivation:**
When I upload/update an SVG file in Google Drive, I'd like the upload file event to trigger a process that turns the uploaded SVG into a React component. I make SVGs using a program called Affinity Designer, and one of the integrations for this program is Google Drive — so this would be a nifty way to automate my workflow.

After doing some research around Google Drive integrations, I found out that there are lots of players in the "glue" space (i.e. app to app integrations that glue together each app's APIs; e.g. Zapier, Automate.io). But they're all limited to a certain number of invocations a month, which is lame. So more generally, the solution to my specific SVG related workflow acts as an example of how to do what these glue software companies do using open source technologies.
