select
    sum(case when age is null then 1 else 0 end) as users
from user_info
;