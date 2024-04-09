from flask import Blueprint

core_bp = Blueprint(
    "core_bp", __name__, template_folder="templates", static_folder="static"
)


@core_bp.route("/")
def home():
    return "Hello!"
