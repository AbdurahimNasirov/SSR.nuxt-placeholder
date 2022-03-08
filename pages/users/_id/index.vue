<script>
export default {
  name: 'PostUnknown',
  asyncData ({ redirect, params }) {
    redirect(`/users/${params.id}/posts`)
  }
}
</script>
