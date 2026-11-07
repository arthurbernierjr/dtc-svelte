<script>
  let { initial = { subject: "", details: "" }, buttonLabel = "Create Todo", onsave } = $props();

  let subject = $state(initial.subject);
  let details = $state(initial.details);

  async function handleSubmit(event) {
    event.preventDefault();
    await onsave({ subject, details });
  }
</script>

<form onsubmit={handleSubmit}>
  <input type="text" placeholder="subject" bind:value={subject} />
  <input type="text" placeholder="details" bind:value={details} />
  <input type="submit" value={buttonLabel} />
</form>
