import os
import jmcomic

current_dir = os.path.dirname(os.path.abspath(__file__))

option = jmcomic.create_option_by_file(f"{current_dir}/option.yml")

option.dir_rule.base_dir = current_dir

jmcomic.download_album(398022, option)
