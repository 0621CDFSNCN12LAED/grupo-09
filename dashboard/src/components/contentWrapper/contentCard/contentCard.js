export default function ContentCard(props) {
  return (
    <div class="col-lg-6 mb-4">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h5 class="m-0 font-weight-bold text-gray-800">{props.title}</h5>
        </div>
        <div class="card-body">{props.children}</div>
      </div>
    </div>
  );
}